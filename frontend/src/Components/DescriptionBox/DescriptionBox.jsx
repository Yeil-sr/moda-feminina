import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = ()=>{
    return (
        <div className='descriptionbox'>
            <div className="descripitonbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade"></div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo quidem, veniam laudantium velit itaque libero reprehenderit quis voluptatibus in architecto sit asperiores nemo ipsa, at nihil. Temporibus, repellendus soluta!</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, repudiandae sequi. Maiores nobis dicta nam blanditiis similique exercitationem aliquam quae numquam esse animi quisquam et laudantium tempora, sapiente veniam necessitatibus!
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox