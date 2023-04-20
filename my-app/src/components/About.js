import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize';
export default function About() {
    return (
        <div className="about">
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="About Me"
          icon={<Icon>assignment_ind</Icon>}
          node="div"
        >
          
            I'm Le Quang Phu from FPT University.My website was created to provide viewers with extensive information about movie-related events.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Nation"
          icon={<Icon>location_on</Icon>}
          node="div"
        >
            I am Vietnamese and I really like American movies and a lots of movie on the word especially Hollywood. 
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Studios on the world"
          icon={<Icon>local_fire_department</Icon>}
          node="div"
        >
            <Slider>
                <Slide image={<img className='opa' alt="" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/View_from_behind_Hollywood_Sign_overlooking_LA.jpg"/>}>
                    <Caption placement="left">
                        <h3>
                            HollyWood
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Hollywood is a neighborhood in the central region of Los Angeles, California. Its name has come to be a shorthand reference for the U.S. film industry and the people associated with it.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img className='opa' alt="" src="https://deadline.com/wp-content/uploads/2022/03/marvel-studios.jpeg"/>}>
                    <Caption placement="left">
                        <h3>
                           Marvel Studio
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Marvel Studios, LLC (originally known as Marvel Films from 1993 to 1996) is an American film and television production company that is a subsidiary of Walt Disney Studios.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img className='opa' alt="" src="https://www.whats-on-netflix.com/wp-content/uploads/2018/12/Warner-Brothers-Netflix-Content.jpg"/>}>
                    <Caption placement="left">
                        <h3>
                            Warner Bros
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Warner Bros. Entertainment Inc. (commonly known as Warner Bros. or abbreviated as WB) is an American film and entertainment studio headquartered at the Warner Bros. Studios complex in Burbank, California, and a subsidiary of Warner Bros. Discovery.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img alt="" className='opa' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0CF86F6F281176EFE2F22314CB713B3AFE515C4291EA9AFC6546F1FE42EFB756/scale?width=2880&aspectRatio=1.78&format=jpeg"/>}>
                    <Caption placement="left">
                        <h3>
                            Pixar
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Pixar Animation Studios is an American computer animation studio known for its critically and commercially successful computer animated feature films. It is based in Emeryville, California, United States.
                        </h5>
                    </Caption>
                </Slide>
            </Slider>
        </CollapsibleItem>
      </Collapsible>
      </div>
    );
}
