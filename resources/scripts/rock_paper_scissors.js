class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    var max = 3;
    var randomNumber = Math.floor(Math.random() * max);
    return acceptedValues[randomNumber];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if(userSelection === 'rock' && cpuSelection === 'scissors'){
      return `win`;
    }
    else if(userSelection === 'paper' && cpuSelection === 'rock'){
      return `win`;
    }
    else if(userSelection === 'scissors' && cpuSelection === 'paper'){
      return `win`;
    }
    else if(userSelection === cpuSelection){
      return `tie`;
    }
    else return `lose`;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    var cpuResponse = this.generateCPUResponse();
    var winner = this.determineWinner(userSelection, cpuResponse);
    if(winner == `win`){
      this.score.user++;
      this.gameHistoryLog.push(`${this.username.value} selected ${userSelection}, CPU selected ${cpuResponse}; ${this.username.value} wins!`);
    }
    else if(winner == `tie`){
      this.gameHistoryLog.push(`${this.username.value} selected ${userSelection}, CPU selected ${cpuResponse}; Tie!`);
    }
    else {
      this.score.cpu++;
      this.gameHistoryLog.push(`${this.username.value} selected ${userSelection}, CPU selected ${cpuResponse}; CPU wins!`);
    }
  }

}