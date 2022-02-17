import styled from 'styled-components'
import title from '../images/title.png';

const DivStyle = styled.div`
  height: 650px;
  width: 16%;
  //border: solid;
  text-align: center;
  min-width: 300px;
  margin-top: 50px;
`

export function LeftMenu() {

    return (
        <DivStyle>
            <img width="70%" src={title}/>
            <div style={{width: '70%', margin: 'auto', marginTop: '5px', marginBottom: '5px'}}>
                <p style={{fontSize: '16px', opacity: '70%'}}>
                    Enter the <strong>FRENY ARENA</strong> and fight to survive as long as you can
                    against an endless horde of enemies to earn a place in our
                    leaderboard.
                </p>

                <p style={{fontSize: '16px', color: '#EF8BFF'}}>
                    Check in every week for a brand new map to discover and master.
                </p>

                <hr/>
            </div>



        </DivStyle>
    );
}
