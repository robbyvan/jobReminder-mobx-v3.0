import { observable, computed } from 'mobx'

class JobStore {

  @observable jobs =  [
                        {  
                         "id": 0,       
                         "company": "Alibaba",
                         "appliedDate": "03-01-2017",
                         "position": "Front-End Engineer",
                         "status": "Replied",
                         "jobLink": "http://www.alibabagroup.com/en/global/careers"
                        },
                        {
                           "id": 1,
                           "company": "Tencent",
                           "appliedDate": "03-01-2017",
                           "position": "Front-End Developer",
                           "status": "Pending",
                           "jobLink": "http://join.qq.com/"
                        },
                        {
                           "id": 2,
                           "company": "LiveRamp",
                           "appliedDate": "03-01-2017",
                           "position": "2017 Summer Intern",
                           "status": "Declined",
                           "jobLink": "https://www.redfin.com/about/jobs"
                        }
                      ];

  @observable jobFilter = undefined;

  @computed get repliedJobs(){
    return this.jobs.filter((job) => {
              if (job.status.toLowerCase() === "replied"){
                return job;
              }
            });
  } 

  @computed get pendingJobs() {
    return this.jobs.filter((job) => {
              if (job.status.toLowerCase() === "pending"){
                return job;
              }
            });
  }
                          
  @computed get declinedJobs() {
    return this.jobs.filter((job) => {
              if (job.status.toLowerCase() === "declined"){
                return job;
              }
            });
  }

  @computed get viewJobs() {

    console.log(this.jobFilter);

    let validFilters = ['replied', "pending", "declined"];

    if (validFilters.indexOf(this.jobFilter) !== -1){
      return this.jobs.filter(
                (job) => job.status.toLowerCase() === this.jobFilter
              );
    }else if(this.jobFilter === undefined) {
      return this.jobs; //all jobs
    }else {
      return false;//no such filter
    }

  }

  addJob(newJob) {
    this.jobs = [...this.job, newJob];
  }

  removeJob(key) {
    this.jobs = this.jobs.filter(
                  (job) => job.id !== key
                );
  }

  editJob(key, newJob) {
    this.jobs = this.jobs.map((job) => {
      if (job.id === key) {
        job = newJob;
      }
      return job;
    });
  }

  changeJobFilter(filter) {
    this.jobFilter = filter;
  }

}
export default new JobStore()
