const storyStore = require('../storyStore');

const routeHome = (req, res, next) => {
  
  let step = req.params.step;
  let direction = req.params.direction;
  let centre = 'story'

  if(typeof step!=='number' && (step%1)!==0){
    step = 0;
  }
  if(typeof direction!=='number' && (direction%1)!==0){
    direction = 0;
  }
  const element = req.body;
  if(Object.keys(element).length>0){
    storyStore.update(element, step, direction)
  }
  if(req.params.next!==undefined){
    centre = req.params.next;
    storyStore.addNext(step, direction)
  }
  const currentStory = storyStore.story[step][direction];
  const nextStep = Number(step)+1;

  const context = {
    layout: false,
    story: currentStory,
    step: step,
    nextStep: nextStep,
    direction: direction,
    centre: centre,
  }
  res.render('home', context)
}
module.exports = routeHome
