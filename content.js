const fortunes = [
    "大吉：今日はなんでもうまくいく！",
    "中吉：ほどほどに良い日。焦らず進めよう。",
    "小吉：ちょっと良いことがあるかも。",
    "吉：思わぬ出会いに注意。",
    "末吉：小さな幸せを見逃さないで。",
    "凶：無理せず休むのが吉。",
    "大凶：今日は慎重に行動しよう…。"
  ];
  
  function drawFortune() {
    const idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
  }

  function createFortuneElement() {
    const newDiv = document.createElement('div');
    newDiv.textContent = "🔮 今日のおみくじ 🔮\n" + drawFortune();
    newDiv.style.cssText = `
      background: #fff3cd;
      border: 1px solid #ffeeba;
      padding: 12px;
      margin: 16px 0;
      font-size: 16px;
      font-weight: bold;
      color: #856404;
      border-radius: 8px;
    `;
    return newDiv;
  }
  
  function checkAndReplaceElement() {
    setTimeout(() => {
      const target = document.querySelector('.YzCcne');
      if (target) {
        target.style.display = 'none';
  
        const fortuneElement = createFortuneElement();
        target.parentNode.insertBefore(fortuneElement, target);
  
        window.isFortuneDisplayed = true;
      }
    },10);
  }
  
  // ページが読み込まれたら実行
  if (!window.isFortuneDisplayed) {
    checkAndReplaceElement();
  }
  