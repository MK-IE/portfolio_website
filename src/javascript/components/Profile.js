import React from "react";

const PROFILE_IMAGE =
    "https://avatars0.githubusercontent.com/u/45517444?s=460&u=f911e521a27ba091350064a7a3f9d851f9a97d91&v=4";

const Profile = () => (
    <header id="profile">
        <section>
            <img
                id="profile-img"
                src={PROFILE_IMAGE}
                alt="Marcin Krzykowski wearing a sweater + red shirt and smiling"
            />
            <h1>Marcin Krzykowski</h1>
            <h2>Upcoming front-end developer</h2>
            <div id="social-media">
                <a href="https://github.com/InferNovac" target="_blank">
                    <i class="fab fa-github icon"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/marcin-krzykowski-7711b01b4/"
                    target="_blank"
                >
                    <i class="fab fa-linkedin icon"></i>
                </a>
                <a href="https://www.hackerrank.com/InferNova" target="_blank">
                    <i class="fab fa-hackerrank icon"></i>
                </a>
            </div>
        </section>
    </header>
);

export default Profile;