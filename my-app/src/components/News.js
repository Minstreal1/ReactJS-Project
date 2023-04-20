import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize';
export default function News() {
  return (
    <div className="about">
      <h1 className="center">News</h1>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="What's New Today?"
          icon={<Icon>newspaper</Icon>}
          node="div"
        >
          <Caption placement="left">
                <img src="https://images.bauerhosting.com/empire/2022/09/deadpool-3-wolverine-logo.jpg?q=80&w=1400&ar=16:9&fit=crop&crop=top" />
                <h3 style={{textAlign: 'center'}}>Hugh Jackman Hints At Variant Wolverine In Deadpool 3</h3>
                <h5>
                While it has been common knowledge for months that Hugh Jackman would be back as Wolverine for Deadpool 3, we've been waiting for other nuggets to drop. Now Jackman himself has let slip something interesting while talking to Le Parisien about The Son – which makes it sounds like we could be seeing more than one Logan in the film.

                  "Yes, it will even be a dual role," he tells the paper, which naturally sets the speculation level to full alert. Does he mean a Wolverine variant – which would not be surprising given how many variants have popped up in the MCU in recent years — or possibly a completely different character? Or even showing up as himself, in true Deadpool meta style?
                </h5>
          </Caption>
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}