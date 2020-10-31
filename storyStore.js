
let story = [
    [
        {
            up: '',
            right: '',
            down: '',
            left: '',
        }
    ],
]

const update=(element, index, direction)=> {
  story[index][direction] = element;
}
const addNext=(index, direction)=> {
    let newStep = new Array(1);
    let directions = new Array(4);
    story.push(newStep);
    story[index].push(directions);
  }

module.exports = {
  story: story,
  update: update,
  addNext: addNext,
};
