import React from "react";
import Header from "./components/Header";
import files from "./utils/apis";
import FileList from "./components/FileList";
import {
  ESCAPE_CODE,
  HOTKEY_CODE,
  UP_ARROW_CODE,
  DOWN_ARROW_CODE,
} from "./utils/KeyCodes";
import SearchView from "./components/SearchView";
import InfoMessage from "./components/InfoMessage";

class App extends React.Component {
  state = {
    isSearchView: false,
    filesList: files,
    index: 0,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEvent);
  }

  handleEvent = (event) => {
    const { index, isSearchView, filesList } = this.state;
    const keyCode = event.keyCode || event.which;

    switch (keyCode) {
      case HOTKEY_CODE:
        this.setState({
          isSearchView: true,
          filesList: files.filter((files) => files.type === "file"),
        });
        break;
      case ESCAPE_CODE:
        this.setState({
          isSearchView: false,
          filesList: files,
        });
        break;

      case UP_ARROW_CODE:
        if (isSearchView && index > 0) {
          this.setState({ index: index - 1 });
        }
        break;
      case DOWN_ARROW_CODE:
        if (isSearchView && index < filesList.length - 1) {
          this.setState({ index: index + 1 });
        }
        break;

      default:
        break;
    }
  };

  handleSearch = (searchTerm) => {
    let list;
    if (searchTerm) {
      const pattern = new RegExp(searchTerm, "gi");
      list = files
        .filter(
          (file) =>
            file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
            file.type === "file"
        )
        .map((file) => ({
          ...file,
          name: file.name.replace(pattern, (match) => {
            return `<mark>${match}</mark>`;
          }),
        }));
    } else {
      list = files.filter((file) => file.type === "file");
    }

    this.setState({
      filesList: list,
    });
  };

  render() {
    const { isSearchView, filesList, index } = this.state;
    return (
      <div className="container">
        <Header />
        {isSearchView ? (
          <div className="search-view">
            <SearchView onSearch={this.handleSearch} />
            <InfoMessage />
            <FileList arrowIndex={index} files={filesList} />
          </div>
        ) : (
          <FileList files={filesList} />
        )}
      </div>
    );
  }
}

export default App;
