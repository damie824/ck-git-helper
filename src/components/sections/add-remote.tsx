export default function AddRemote({
  gitUrl,
  setGitUrl,
  setIsLoading,
}: {
  gitUrl: string;
  setGitUrl: (url: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}) {
  return (
    <main className="h-[100vh] max-w-[1200px] mx-auto w-full p-10 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">Git의 URL을 입력해 주세요.</h1>
      <p className="text-sm text-white/40 mt-3 text-center max-w-80">
        https://github.com/damie824/ck-git-manager.git
        <br />
        위와 같은 형식으로 입력해 주세요.
      </p>
      <input
        type="text"
        placeholder="Git URL"
        className="w-full mt-5 bg-transparent border border-border rounded-md p-2 focus:outline-none max-w-80"
        value={gitUrl}
        onChange={(e) => setGitUrl(e.target.value)}
      />
      <button
        onClick={() => setIsLoading(true)}
        className="w-full mt-5 bg-primary text-primary-foreground hover:opacity-60 transition-all duration-300 rounded-md p-2 max-w-80"
      >
        입력하기
      </button>
    </main>
  );
}
