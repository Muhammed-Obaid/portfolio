import React from 'react'
import './skill.scss'
import Slider from '@mui/material/Slider';

const Skill = () => {
    return (
        <div className='skills sm:p-7 pt-8'>
            <h2 className='sm:text-3xl text-2xl font-bold text-center pt-6 mt-6 text-white tracking-widest'>MY SKILLS</h2>
            <div className='skill-box m-auto py-7 sm:px-8 px-2  sm:mt-2 mt-8 flex flex-col gap-[5px] sm:gap-[8px]'>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>HTML</p>
                    <div className='skill-slider'>
                        <Slider value={80} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>CSS</p>
                    <div className='skill-slider'>
                        <Slider value={65} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>TAILWIND CSS</p>
                    <div className='skill-slider'>
                        <Slider value={60} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>JavaScript</p>
                    <div className='skill-slider'>
                        <Slider value={55} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>React</p>
                    <div className='skill-slider'>
                        <Slider value={50} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>Material-ui</p>
                    <div className='skill-slider'>
                        <Slider value={40} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>SASS</p>
                    <div className='skill-slider'>
                        <Slider value={70} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>Styled component</p>
                    <div className='skill-slider'>
                        <Slider value={70} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm sm:tracking-widest tracking-wider'>GIT</p>
                    <div className='skill-slider  '>
                        <Slider value={70} valueLabelDisplay="auto" />
                    </div>
                </div>
                <div className='skill flex justify-between items-center'>
                    <p className='font-bold sm:text-base text-sm tracking-widest'>GITHUB</p>
                    <div className='skill-slider   '>
                        <Slider value={70} valueLabelDisplay="auto" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skill
