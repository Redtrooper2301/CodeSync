import { useState } from 'react'
import CodeEditor from "./Components/CodeEditor";
import '/src/App.css';  // ✅ Just import it without assigning a variable


function App() {
  const [code, setCode] = useState("// Start coding...");
  const [error, setError] = useState(null);

  const handleEditorChange = (newCode) => {
    try {
      // Try to parse the code
      new Function(newCode);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
    setCode(newCode);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔥 Online Code Editor</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CodeEditor
        height="100vh"
        width="1300px"
        language="javascript"  
        theme="vs-dark"  
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default App;