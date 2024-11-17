export default function AddFeature() {
  return (
    <div className="m-4">
      <h3 className="text-xl font-bold">새로운 기능 추가하기</h3>
      <p className="text-sm text-white/40 mt-3">
        새로운 기능을 추가하실 건가요? <br />
        Git Flow 전략을 사용할 때, 새 기능을 추가하려면
        <br />
        먼저 새로운 브랜치를 생성해야 해요.
      </p>
      <input
        type="text"
        placeholder="추가할 기능의 이름을 알려주세요!"
        className="w-full mt-5 bg-transparent border border-border rounded-md p-2 focus:outline-none"
      />
      <button className="w-full mt-5 bg-primary text-primary-foreground hover:opacity-60 transition-all duration-300 rounded-md p-2">
        추가하기
      </button>
    </div>
  );
}
