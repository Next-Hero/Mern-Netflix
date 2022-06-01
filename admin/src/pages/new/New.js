import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useContext, useState } from "react";
import storage from "../../firebase.init";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from "../../context/movieContext/MovieApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

const New = ({ inputs, title }) => {
  const { dispatch } = useContext(MovieContext);
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  // console.log(img, imgTitle, thumbnailImg, trailer, video);
  console.log(movie);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    console.log("created");
  };

  // file upload to firebase storage
  const upload = (items) => {
    console.log(items);
    items.forEach((item) => {
      console.log(item?.file);
      // const storage = getStorage();
      // const storageRef = ref(storage);
      const fileName = new Date().getTime() + item?.label + item?.file?.name; // write this code to allow the same photo for the another field.
      const uploadMovie = ref(storage, `items/${fileName}`);
      const uploadTask = uploadBytesResumable(uploadMovie, item?.file);
      uploadTask.on(
        "state_changes",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress} % done`);
        },
        (err) => {
          // console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setMovie((prev) => {
              return { ...prev, [item?.label]: downloadURL };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: thumbnailImg, label: "thumbnailImg" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                img
                  ? URL.createObjectURL(img)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="img">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img"
                  onChange={(e) => setImg(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="imgTitle">
                  Title Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="imgTitle"
                  name="imgTitle"
                  onChange={(e) => setImgTitle(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="thumbnailImg">
                  Thumbnail Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="thumbnailImg"
                  name="thumbnailImg"
                  onChange={(e) => setThumbnailImg(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    name={input.label.toLowerCase()}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <div className="formInput">
                <label htmlFor="trailer">
                  Trailer: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="trailer"
                  img="trailer"
                  onChange={(e) => setTrailer(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="video">
                  Video: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  onChange={(e) => setVideo(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {uploaded >= 5 ? (
                <button onClick={handleCreate}>Create</button>
              ) : (
                <button onClick={handleUpload}>Upload</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
