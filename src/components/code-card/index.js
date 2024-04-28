import "./index.scss";

function Code({ text, type }) {
  const handleCopy = () => {
    // 在使用这个功能的时候，我遇到了一个报错：
    // Cannot read properties of undefined (reading 'writeText')
    // 是看了这个大佬的博客才知道的：https://www.jianshu.com/p/418d1c9a3062
    // 不过这个官方文档上面也有说过。
    navigator.clipboard.writeText(text).then(() => {
      console.log("复制成功");
    });
  };
  return (
    <div className="code-box">
      <div>
        <span>{type}</span>
        <span className="copy" onClick={handleCopy}>
          复制
        </span>
      </div>
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}
export default Code;
