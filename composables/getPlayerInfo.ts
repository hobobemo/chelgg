export function getPlayerConsoleName(value: string){
    switch (value) {
      case 'xbsx':
        return 'XBOX';
        break;
      case 'ps5':
        return 'Playstation';
        break;
    }
}

export function getPlayerPositionName(value: string){
  switch (value) {
    case 'center':
      return 'Center';
      break;
    case 'leftWing':
      return 'Left Wing';
      break;
    case 'rightWing':
      return 'Right Wing';
      break;
    case 'defenseMen':
      return 'Defense';
      break;
    case 'goalie':
      return 'Goalie';
      break;
  }
}

export function getPlayerPositionAbbr(value: string){
  switch (value) {
    case 'center':
      return 'C';
      break;
    case 'leftWing':
      return 'LW';
      break;
    case 'rightWing':
      return 'RW';
      break;
    case 'defenseMen':
      return 'D';
      break;
    case 'goalie':
      return 'G';
      break;
  }
}