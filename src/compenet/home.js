import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';

export function Homepage () {
    
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className='text-info fs-2'>Below</span><span>Water</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Life below water</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">conact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  );
};