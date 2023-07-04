"use client";


export default function BackgroundJobsPage() {

  async function triggerFileUpload() {
    await fetch('/use-cases/background-jobs/csv-file', { method: 'PUT' });
  }

  return (
    <div>
      <h1>Background Jobs</h1>
      <button onClick={triggerFileUpload}>Upload CSV File</button>
    </div>
  );
}
