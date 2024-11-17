export default function SetPath({
  setPath,
}: {
  setPath: (path: string) => void;
}) {
  return (
    <main className="h-[100vh] max-w-[1200px] mx-auto w-full p-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">파일 위치를 선택해 주세요</h1>
      <p className="text-sm text-white/40 mt-3 text-center max-w-80">
        Git을 적용할 파일 위치를 선택해 주세요.
      </p>
      <div className="flex flex-col w-52 gap-2 mt-5 text-xs">
        <button className="bg-primary text-primary-foreground hover:opacity-60 transition-all duration-300 rounded-md p-2 w-full">
          새로운 프로젝트 불러오기
        </button>
        <button className="border-border border hover:bg-border transition-all duration-300 rounded-md p-2 w-full">
          기존 파일 열기
        </button>
      </div>
      <div className="flex items-center gap-2 mt-5 w-52">
        <div className="w-full h-[1px] bg-border"></div>
        <p>Or</p>
        <div className="w-full h-[1px] bg-border"></div>
      </div>
      <div>
        <div className="flex items-center gap-2 mt-5 group cursor-pointer">
          <p className="text-sm">Test Porject</p>
          <p className="text-xs text-white/40 group-hover:underline">
            D:/Pr.dasknf/dg/asdg/a/gdsa/gds/gas/ojects/test/..
          </p>
        </div>
      </div>
    </main>
  );
}
