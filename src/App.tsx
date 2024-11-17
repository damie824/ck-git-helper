import { useEffect, useState } from "react";
import Dialog from "./components/dialog";
import AddFeature from "./components/features/add-feature";
import AddRemote from "./components/sections/add-remote";
import MainButtons from "./components/sections/main/buttons";

import "./styles/App.css";
import SetPath from "./components/sections/set-path";

function App() {
  const [path, setPath] = useState<string>("");
  const [nowBranch, setNowBranch] = useState<string>("main");
  const [gitUrl, setGitUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  if (path === "") {
    return <SetPath setPath={setPath} />;
  }

  if (gitUrl === "" || !isLoading) {
    return (
      <AddRemote
        gitUrl={gitUrl}
        setGitUrl={setGitUrl}
        setIsLoading={setIsLoading}
      />
    );
  }

  if (gitUrl !== "" && isLoading) {
  }

  return (
    <main className="h-[100vh] max-w-[1200px] mx-auto w-full p-10 flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="w-full gap-5 flex items-center justify-center0">
          <div>
            <h1 className="text-3xl font-bold text-left">CK Git Manager</h1>
            <p className="text-sm">v 1.0 / 현재 브랜치 : {nowBranch}</p>
          </div>
          <div className="flex-1 h-[1px] bg-border"></div>
        </div>
        <p className="text-sm text-white/40 my-3 mb-10">
          이 프로그램은 청강대학교에서 공식적으로 제공하는 프로그램이 아닙니다.
          <br />
          브랜치 전략은 Git flow로 고정되며, 비개발자 분들도 쉽게 협업할 수
          있도록 개발되었습니다.
          <br />
          버그를 발견하셨다면{" "}
          <a
            className="text-primary hover:underline"
            href="mailTo:lee@gyuyeon.dev"
          >
            이메일
          </a>
          로 문의해 주세요.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {!nowBranch.startsWith("feature/") ? (
          <Dialog
            trigger={
              <MainButtons
                title="새로운 기능 추가하기"
                description={`새로운 기능을 추가하기 위한 브랜치를 생성합니다.\n브랜치 이름은 영어로 작성해야 합니다.`}
              />
            }
            id="new-feature"
          >
            <AddFeature />
          </Dialog>
        ) : (
          <MainButtons
            title="부가 기능 추가하기"
            description={`부가적인 기능을 추가합니다.\n 완전한 새 기능 추가는 권장하지 않습니다.`}
          />
        )}
        <MainButtons
          title="브랜치 변경하기"
          description={`새 버전 출시 직전인 경우,\n급한 패치가 필요한 경우 등에 사용합니다.`}
        />
        <MainButtons
          title="변경사항 업로드하기"
          description={`변경사항을 업로드합니다.\n 깃 관리자의 승인이 필요합니다.`}
        />
        <MainButtons
          title="변경 사항 불러오기"
          description={`앱이 실행될 시 자동으로 불러오지만, \n 개발 중 새로운 기능이 패치된 경우 사용합니다.`}
        />
      </div>
      <p className="text-sm text-white/40 mt-5">
        Copyright 2024. Gyuyeon Lee. All rights reserved.
      </p>
    </main>
  );
}

export default App;
