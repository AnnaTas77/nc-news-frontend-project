import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/utils";
import { Link } from "react-router-dom";
import TopicIcon from "../assets/trending.png";

function TopicsList() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getAllTopics()
            .then((topicsFromDB) => {
                setTopics(topicsFromDB);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <ul className="topics-container">
            {topics.map((topic) => {
                return (
                    <li key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`}>
                            <div>
                                <img className="topic-img" src={TopicIcon} alt="topic default icon" />
                            </div>
                            <div className="topic-info">
                                <p className="topic-title">{topic.slug}</p>
                                <p className="topic-description">{topic.description}</p>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default TopicsList;
