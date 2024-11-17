
pub fn check_git_url(url: &str) -> Result<bool, String> {
    // Git init 여부 확인
    let init_check = Command::new("git")
        .arg("rev-parse")
        .arg("--is-inside-work-tree")
        .output();

    if init_check.is_err() {
        return Err("Git이 초기화되지 않았습니다.".to_string());
    }

    // Remote origin 확인
    let remote_check = Command::new("git")
        .arg("remote")
        .arg("get-url")
        .arg("origin")
        .output();

    match remote_check {
        Ok(output) => {
            let remote_url = String::from_utf8_lossy(&output.stdout);
            if remote_url.trim() != url {
                return Err("원격 저장소 URL이 일치하지 않습니다.".to_string());
            }
        }
        Err(_) => return Err("원격 저장소가 설정되지 않았습니다.".to_string())
    }

    // 현재 브랜치 이름 확인
    let branch_check = Command::new("git")
        .arg("rev-parse")
        .arg("--abbrev-ref")
        .arg("HEAD")
        .output();

    match branch_check {
        Ok(output) => {
            let branch_name = String::from_utf8_lossy(&output.stdout);
            let branch = branch_name.trim();
            
            if !branch.starts_with("main") && 
               !branch.starts_with("develop") && 
               !branch.starts_with("feature/") &&
               !branch.starts_with("release/") &&
               !branch.starts_with("hotfix/") {
                return Err("Git Flow 전략에 맞지 않는 브랜치입니다.".to_string());
            }
        }
        Err(_) => return Err("브랜치 정보를 가져올 수 없습니다.".to_string())
    }

    Ok(true)
}

pub fn add_branch(name: &str) -> Result<(), String> {
    match Command::new("git")
        .arg("checkout") 
        .arg("-b")
        .arg(name)
        .output()
    {
        Ok(_) => Ok(()),
        Err(e) => Err(format!("브랜치 생성 중 오류가 발생했습니다: {}", e))
    }
}
