import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    );
  }
}

export default App;

/*
<div>
        <GeneralInfo
          update={(newGeneralData) =>
            this.setState({ ...this.state, generalData: newGeneralData })
          }
        />
        <EducationInfo
          update={(newEducationData) =>
            this.setState({ ...this.state, educationData: newEducationData })
          }
        />
      </div>
*/
