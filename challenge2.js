function speedGovernor(){
    const speedLimit = 70;
    const points = 5;
    if (speed <=speedLimit){
        console.log("Ok");
    }else {
        // 
        const demeritPoint = Math.floor((speed - speedLimit)/points);
        console.log(`points: ${demeritPoint}`);

    }
    }
    const speed = 90;
speedGovernor()