import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
  const [background, setBackground] = useState(
    "https://images.unsplash.com/photo-1551517333-41b24d939d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/morsewall/jsondb/quotes"
      );
      const data = await response.json();
      console.log(data);
      setQuote(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
      console.log(data[randomIndex].quoteAuthor);
      console.log(randomQuote);
    };
    fetchData();
  }, []);

  const clickHandler = () => {
    const backgrounds = [
      "https://images.unsplash.com/photo-1551517333-41b24d939d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1552658249-ffe45eea0821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      "https://images.pexels.com/photos/2975498/pexels-photo-2975498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.unsplash.com/photo-1568994105244-51e2467a98fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1687&q=80",
      "https://images.unsplash.com/photo-1553522911-f8607a133a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1569038813154-2fa3cc2ac458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1571987937667-524f98e86a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      "https://images.unsplash.com/photo-1494192438109-373d5aa2c8c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1558770147-68c0607adb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
      "https://images.unsplash.com/photo-1552658249-ae214c5a19fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      "https://images.unsplash.com/photo-1606414140199-6092efceadb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1568994105591-922d787135dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80",
      "https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1571987937324-e91fd2d7e69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1569768751132-5d3efb4e1ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1569637869214-09dffc72a12a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
      "https://images.unsplash.com/photo-1569060368917-3689b132a48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1568994105263-6d00c9ad399c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1751&q=80",
      "https://images.unsplash.com/photo-1569225034143-754335938607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2868&q=80",
      "https://images.unsplash.com/photo-1552658249-ae214c5a19fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    ];

    let randomIndex = Math.floor(Math.random() * quote.length);
    setRandomQuote(quote[randomIndex]);
    let randomBG = Math.floor(Math.random() * backgrounds.length);

    setBackground(backgrounds[randomBG]);
  };

  return (
    <div
      id="background"
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <div id="quote-container">
        <div id="quote-box">
          <div id="text">{randomQuote.quoteText}</div>
          <div id="author">{randomQuote.quoteAuthor}</div>
          <div className="bottom-container">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_top">
              <i class="ph ph-twitter-logo ph-fill"></i>
            </a>
            <button id="new-quote" onClick={clickHandler}>
              Panic!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
