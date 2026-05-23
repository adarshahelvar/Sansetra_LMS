import "./ManageCourse.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

function ManageCourse() {
  const { courseId } = useParams();

  const [topics, setTopics] = useState([]);
  const [topicTitle, setTopicTitle] = useState("");

  const [videoForms, setVideoForms] = useState({});

  useEffect(() => {
    loadTopics();
  }, []);

  const loadTopics = async () => {
    try {
      const res = await api.get(`/course/content/${courseId}`);

      setTopics(res.data.topics);
    } catch (err) {
      console.log(err);
    }
  };

  const createTopic = async () => {
    try {
      await api.post("/topic", {
        courseId,
        title: topicTitle,
      });

      setTopicTitle("");

      loadTopics();
    } catch (err) {
      console.log(err);
    }
  };

  const addNewVideoForm = (topicId) => {
    setVideoForms({
      ...videoForms,

      [topicId]: [
        ...(videoForms[topicId] || []),

        {
          title: "",
          description: "",
          videoUrl: "",
          duration: "",
        },
      ],
    });
  };

  const updateVideo = (topicId, index, field, value) => {
    const updated = [...(videoForms[topicId] || [])];

    updated[index][field] = value;

    setVideoForms({
      ...videoForms,

      [topicId]: updated,
    });
  };

  const saveAllContent = async () => {
    try {
      for (const topicId in videoForms) {
        const videos = videoForms[topicId];

        for (const video of videos) {
          await api.post(
            "/videos",

            {
              topicId,

              ...video,
            },
          );
        }
      }

      alert("Course content saved successfully");

      setVideoForms({});

      loadTopics();
    } catch (error) {
      console.log(error);

      alert("Saving failed");
    }
  };

  const publishCourse = async () => {
    try {
      const res = await api.put(`/course/publish/${courseId}`);

      alert(res.data.message);
    } catch (error) {
      console.log(error);

      alert("Publishing failed");
    }
  };

  return (
    <div className="manage-page">
      <div className="container">
        <h1>Manage Course Content</h1>

        <div className="topic-section">
          <input
            placeholder="New Topic"
            value={topicTitle}
            onChange={(e) => {
              setTopicTitle(e.target.value);
            }}
          />

          <button onClick={createTopic}>Add Topic</button>
        </div>

        {topics.map((topic) => (
          <div key={topic._id} className="topic-card">
            <h3>{topic.title}</h3>

            {/* Existing videos */}

            {topic.videos.map((video) => (
              <div className="existing-video" key={video._id}>
                ▶ {video.title}
              </div>
            ))}

            {/* New forms */}

            {(videoForms[topic._id] || []).map((video, index) => (
              <div key={index} className="video-card">
                <h5>Video {index + 1}</h5>

                <input
                  placeholder="Video title"
                  value={video.title}
                  onChange={(e) => {
                    updateVideo(topic._id, index, "title", e.target.value);
                  }}
                />

                <input
                  placeholder="Description"
                  value={video.description}
                  onChange={(e) => {
                    updateVideo(
                      topic._id,
                      index,
                      "description",
                      e.target.value,
                    );
                  }}
                />

                <input
                  placeholder="Youtube Embed URL"
                  value={video.videoUrl}
                  onChange={(e) => {
                    updateVideo(topic._id, index, "videoUrl", e.target.value);
                  }}
                />

                <input
                  placeholder="Duration"
                  type="number"
                  value={video.duration}
                  onChange={(e) => {
                    updateVideo(topic._id, index, "duration", e.target.value);
                  }}
                />
              </div>
            ))}

            <button
              className="add-video-btn"
              onClick={() => {
                addNewVideoForm(topic._id);
              }}
            >
              + Add Another Video
            </button>
          </div>
        ))}

        <div className="save-section">
          <button className="publish-btn" onClick={publishCourse}>
            Publish Course
          </button>

          <button className="save-course-btn" onClick={saveAllContent}>
            Save Course Content
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageCourse;
