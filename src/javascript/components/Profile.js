import React from 'react';

const PROFILE_IMAGE =
    'https://avatars0.githubusercontent.com/u/45517444?s=460&u=f911e521a27ba091350064a7a3f9d851f9a97d91&v=4';

const Profile = () => (
    <section id='profile' className='col-1'>
        <img id='profile-img' src={PROFILE_IMAGE} alt='Marcin Krzykowski' />
        <h1>Marcin Krzykowski</h1>
        <h2>Upcoming front-end developer</h2>
        <div id='social-media'>
            <a href='https://github.com/InferNovac' target='_blank'>
                <i class='github icon'></i>
            </a>
            <a
                href='https://www.linkedin.com/in/marcin-krzykowski-7711b01b4/'
                target='_blank'
            >
                <i class='linkedin icon'></i>
            </a>
            <a href='https://www.hackerrank.com/InferNova' target='_blank'>
                <i class='hackerrank icon'></i>
            </a>
        </div>
    </section>
);

export default Profile;
