import data from "../python_data/info.json"


type Activity = {
    time: string ;
    timeBlock: number; //0: fri evening, 1:sat day, 2: sat eve, 3: sun day, 4: sun eve
    desc: string;
    name: string;
    location: string;
};


const acts: Activity[] = []


const emails:string[] = []

export function populateActivities() {
    // loop through data, right now it's a json obj (array)
    
    for (let i = 0; i < data.length; i++) {
      const activity:Activity={}
      activity.time = data[i].time;
      activity.desc = data[i].description;
      activity.name = data[i].name;
      activity.location = data[i].location;

      activity.timeBlock = 0;
      acts.push(activity)

    }

  }


export async function getActivities(timeBlock:int=0): Promise<Activity[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const activites3:Activity[] = [];
    const activites = acts.filter((activity) => activity.timeBlock == timeBlock);
    for (let i=0;i<3;i++){
        if(activites.length<1) break;
        const num = Math.floor(Math.random() * activites.length);
        activites3[i] = activites[num];
        activites.splice(num,1);
        
    }
    return activites3.sort();
}

export async function getActivity(name:string): Promise<Activity> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const activity:Activity = acts.find(element => (element.name.replace(/\s/g, '') == name ));
    return activity;
}

export async function postEmail(email:string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    try {emails.push(email);}
    catch (err){
        console.error(err)
    }
    return true
}

export async function getEmail(): Promise<string>{
    await new Promise((resolve) => setTimeout(resolve, 500))
    return emails[0]
}
