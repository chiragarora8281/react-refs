//! Video 43 - React refs 1
//! Basic interaction of ref function
// /* eslint-disable no-undef */
// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//  constructor is the best place to initalize state, binding this keyword, refs function
//     this.divRef = React.createRef(null);
//     this.h1Ref = React.createRef(null);
//   }

//   //! ref way to interact with DOM
//   // componentDidMount() {
//   //   console.log(this.divRef);
//   //   console.log(this.h1Ref);

//   //   this.h1Ref.current.style.background = "blue";
//   //   this.h1Ref.current.style.color = "white";
//   //   this.h1Ref.current.style.padding = "10px";
//   // }

//   //! Normal way to interact with native DOM elements or node - NOt recommended to interact directly
//   componentDidMount() {
//     let para = document.getElementById('para');
//     para.style.background = "green";
//     para.style.color = "white";
//     para.style.padding = "10px";
//   }

//   render() {
//     return <div ref={this.divRef}>
//       <h1 ref={this.h1Ref}>Hello World!</h1>
//       <h1 id="para">Hello Heading</h1>
//     </div>
//   }
// }

//! ref in CBC
// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//   state = {
//     val: "",
//   };
//   inputRef = React.createRef(null);

//   changeInputColor = () => {
//     this.setState({val: "Imran"}); // mutating value using setState
//     this.inputRef.current.style.background = "grey";
//     this.inputRef.current.style.color = "white";
//     this.inputRef.current.style.width = "500px";
//     // this.inputRef.current.append= "Added some text"; //not working
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder='change my color' ref={this.inputRef} value={this.state.val}/>
//         <button onClick={this.changeInputColor}>change color</button>
//       </div>
//     )
//   }
// }

//! refs in FBC
// import React, { createRef } from 'react'

// const App = () => {
//   let usernameRef = createRef();
//   let passwordRef = createRef();

//   let getDataFromForm = (e) => {
//     e.preventDefault();
//     let username = usernameRef.current.value;
//     let password = passwordRef.current.value;
//     console.log({username, password})
//   }
//   return (
//     <div>
//       <form>
//         <input type="text" id='username' placeholder='username' ref={usernameRef}/>
//         <input type="text" id='password' placeholder='password' ref={passwordRef}/>
//         <button onClick={getDataFromForm}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//! useRef hook is only present in FBC, alternative of createRef();
// import React, { useRef } from 'react'
// import Video from './components/videos/Video';

// const App = () => {
//   // const inputRef = useRef();

//   // let changeInput = () => {
//   //   inputRef.current.placeholder = 'Change text';
//   //   inputRef.current.style.background = '#fff';
//   //   inputRef.current.style.color = 'black';
//   // }

//   return (
//     <div>
//       {/* <input type="text" ref={inputRef} onClick={changeInput}/> */}
//       <Video/>
//     </div>
//   )
// }

// export default App

//! Video player app
import { useState } from "react";
import JSON from "./video.json";
import VideoContainer from "./components/videoComp/VideoContainer";
const App = () => {
  let [state, setState] = useState(JSON);
  let [selectedVideo, setSelectedVideo] = useState(state[0].contentUrl)

  let handleClick = (item) =>{
    return setSelectedVideo(item.contentUrl);
  }
  return <VideoContainer state={state} selectedVideo={selectedVideo} handleClick={handleClick}/>;
};

export default App;
