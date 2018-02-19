import SearchBar from "../components/SearchBar";
import Sinon from "sinon";

describe("<SearchBar />", () => {
  it("should render an input field", () => {
    const Wrapper = shallow(<SearchBar />);
    expect(Wrapper.find("input").exists()).to.equal(true);
  });

  it("input field with value", () => {
    const Wrapper = shallow(<SearchBar keyword="test" />);
    const input = Wrapper.find("input");
    const mockChangeEvent = {
      target: {
        value: "input event"
      }
    };
    expect(Wrapper.state("keyword")).to.equal("test");
    input.simulate("change", mockChangeEvent);
    expect(Wrapper.state("keyword")).to.equal("input event");
  });

  it("should render an input field", () => {
    const Wrapper = shallow(<SearchBar keyword="test" />);
    expect(Wrapper.state("keyword")).to.equal("test");
    Wrapper.setProps({ keyword: "new keyword" });
    expect(Wrapper.state("keyword")).to.equal("new keyword");
  });

  it("should invoke keyword change event when keyword changed", () => {
    const keywordChanged = Sinon.spy();
    const Wrapper = shallow(<SearchBar keywordChanged={keywordChanged} />);
    const input = Wrapper.find("input");
    const mockChangeEvent = {
      target: {
        value: "input event"
      }
    };
    input.simulate("change", mockChangeEvent);
    expect(keywordChanged.calledOnce).to.equal(true);
    expect(keywordChanged.calledWith("input event")).to.equal(true);
  });
});
