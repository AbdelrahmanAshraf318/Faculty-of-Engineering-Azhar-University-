import React from 'react'
import { Helmet } from 'react-helmet'
import About from './about'
import News from './news';
import MissionVision from './mission_vision';
import Instructors from './instructors';
import Advertisements from './advertisements';
import Photo from '../../images/icon.png'

const TITLE = 'Computer Engineering'

class ComputerEngineering extends React.Component{


    render(){



        return(
            

            
            <div>
                <Helmet>
                    <link rel="icon" type="image/png" href={Photo} />
                    <title>{TITLE}</title>
                </Helmet>
                <Instructors />
                <About/>
                <News />
                <MissionVision />
                <Advertisements/>
                
            </div>

           
            


        )




    }


}

export default ComputerEngineering;