import { observable, computed } from 'mobx'

class AllJobState {
  @observable 
  jobs = [
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

  addJob(newJob) {
    this.jobs = [...this.job, newJob];
  }

  removeJob(key) {
    this.jobs = this.jobs.filter((job) => job.id !== key);
  }

  editJob(key, newJob) {
    this.jobs = this.jobs.map((job) => {
      if (job.id === key) {
        job = newJob;
      }
      return job;
    });
  }

}
export default AllJobState
