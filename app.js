fetch('jobs-data.json')
  .then(response => response.json())
  .then(data => {
    const jobsList = document.querySelector('#jobs ul');

    function displayJobs(jobs) {
      jobsList.innerHTML = '';

      jobs.forEach(job => {
        const li = document.createElement('li');
        const title = document.createElement('h3');
        title.textContent = job.title;
        const company = document.createElement('p');
        company.textContent = job.company;
        const location = document.createElement('p');
        location.textContent = job.location;
        const salary = document.createElement('p');
        salary.textContent = job.salary;

        li.appendChild(title);
        li.appendChild(company);
        li.appendChild(location);
        li.appendChild(salary);
        jobsList.appendChild(li);
      });
    }

    displayJobs(data);

    const searchForm = document.querySelector('form');
    const searchBar = document.querySelector('#search-bar');

    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      const searchTerm = searchBar.value.toLowerCase().trim();

      const filteredJobs = data.filter(job => {
        const title = job.title.toLowerCase();
        const company = job.company.toLowerCase();
        const location = job.location.toLowerCase();
        return title.includes(searchTerm) || company.includes(searchTerm) || location.includes(searchTerm);
      });

      displayJobs(filteredJobs);
    });
  });