import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>조은정의 프로필 페이지</h1>
        <p>안녕하세요! 저는 개발을 공부하고 있는 조은정입니다.</p>
        <a
          className="App-link"
          href="https://github.com/E-hyeon"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub 프로필 보기
        </a>
      </header>
    </div>
  );
};

export default App;
