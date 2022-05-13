import { MdArrowBack } from "react-icons/md";
import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <MdArrowBack />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?v=BPstGan8e5Q"
      />
    </div>
  );
}
