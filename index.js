var katzDeli = [];

function takeANumber(katzDeliLine, newPeople){
  katzDeliLine.push(newPeople);
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else
    return `Currently serving ${katzDeliLine.shift()}.`
}
