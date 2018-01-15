var katzDeli = [];

function takeANumber(katzDeliLine, newPeople){
  katzDeliLine.push(newPeople);
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}
