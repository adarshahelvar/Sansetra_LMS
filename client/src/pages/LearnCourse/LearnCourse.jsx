import "./LearnCourse.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../api/axios";

function LearnCourse() {
  const { courseId } = useParams();

  const [topics, setTopics] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchCourseContent();
  }, []);

  const fetchCourseContent = async () => {
    try {
      const res = await api.get(`/course/content/${courseId}`);

      setTopics(res.data.topics);

      if (res.data.topics.length > 0 && res.data.topics[0].videos.length > 0) {
        setSelectedVideo(res.data.topics[0].videos[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="learn-container">
      <div className="course-sidebar">
        <h3>Course Content</h3>

        {topics.map((topic) => (
          <div key={topic._id}>
            <div className="topic-title">{topic.title}</div>

            {topic.videos.map((video) => (
              <div
                key={video._id}
                className={`video-item 

${selectedVideo?._id === video._id ? "active-video" : ""}

`}
                onClick={() => {
                  setSelectedVideo(video);
                }}
              >
                ▶ {video.title}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="video-area">
        {selectedVideo ? (
          <>
            <iframe
              src={selectedVideo.videoUrl}
              title="course-video"
              allowFullScreen
            ></iframe>

            <div className="video-info">
              <h2>{selectedVideo.title}</h2>

              <p>{selectedVideo.description}</p>
            </div>
          </>
        ) : (
          <h2>No video available</h2>
        )}
      </div>
    </div>
  );
}

export default LearnCourse;
