export default function getNeighborhoodList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  /** converting this fucntion to an arrow function*/
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

