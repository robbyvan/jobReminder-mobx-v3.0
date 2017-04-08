import { observable, computed, action } from 'mobx'

const fetchData = (url, method) => {
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
    // let xhr = window.XMLHttpRequest()?
    //           new XMLHttpRequest():
    //           new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open(method, url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        resolve(xhr.response);
      }else {
        reject({
          status:xhr.status,
          statusText: xhr.statusText,
          response: xhr.response
        });
      }
    };

    xhr.onerror = () => {
      reject({
          status:xhr.status,
          statusText: xhr.statusText,
          response: xhr.response
        });
    }

    xhr.send();
  });
}


class JobStore {

  @observable fetched = window.localStorage.jobsFetched? true: false;

  @observable jobs =  [];

  @observable jobFilter = undefined;

  fetchJobs() {
    if (this.fetched === false) {
      console.log("data have fetched?", this.fetched.toString());
      fetchData("https://raw.githubusercontent.com/robbyvan/Job-Reminder/master/dist/data/applications.json", "GET")
        .then((res) => {
          //Can't write like: [this.jobs = res]
          window.localStorage.jobs = res;
          JSON.parse(window.localStorage.jobs).map((job) => {
            this.jobs.push(job);
          });
          window.localStorage.jobsFetched = true;
          this.fetched = window.localStorage.jobsFetched;
        })
        .catch((err) => {
          console.log(err);
          throw err;
        })
    }else {
      console.log("fetched?", this.fetched.toString());
      this.jobs = JSON.parse(window.localStorage.jobs);
    }
  }

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

    // console.log(this.jobFilter);

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
    this.jobs.push(newJob);
    window.localStorage.jobs = JSON.stringify(this.jobs);
  }

  removeJob(key) {
    this.jobs = this.jobs.filter(
                  (job) => job.id !== key
                );
    window.localStorage.jobs = JSON.stringify(this.jobs);
  }

  editJob(key, newJob) {
    this.jobs = this.jobs.map((job) => {
      if (job.id === key) {
        job = newJob;
      }
      return job;
    });
    window.localStorage.jobs = JSON.stringify(this.jobs);
  }

  changeJobFilter(filter) {
    this.jobFilter = filter;
  }

}
export default new JobStore()
