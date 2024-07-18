<style>
/* General Styles */
html, body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; /* Modern sans-serif font */
  line-height: 1.5; /* Improved readability */
  background-color: #f5f5f5; /* Light background */
  color: #333; /* Dark text */
  margin: 0;
  padding: 0;
}

.ui.menu {
  background-color: #fff; /* White background */
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 1rem 0; /* Consistent padding */
}

.ui.menu .item {
  font-size: 1rem; /* Readable font size */
  padding: 0.5rem 1rem; /* Adjusted padding */
}

/* Link Styles */
a, button.item {
  color: #007bff; /* Blue link color */
  text-decoration: none; /* Remove default underlines */
}

a:hover, button.item:hover {
  text-decoration: underline; /* Underline on hover */
}

/* Icon Styles */
i.icon {
  margin-right: 0.5rem; /* Space between icon and text */
  color: #6c757d; /* Gray icon color */
}

/* Sidebar Styles */
.ui.sidebar {
  background-color: #fff; /* White background */
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* Shadow on the right */
  transition: transform 0.3s ease; /* Smoother transition */
}

.ui.sidebar .item {
  border-bottom: 1px solid #f0f0f0; /* Subtle dividers */
}

.ui.sidebar.bg {
  background-color: rgba(0, 0, 0, 0.5); /* Darker overlay */
}

/* Content Styles */
#main {
  padding: 2rem; /* Add padding around main content */
}

p {
  text-align: justify;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;
}
/* Specific Media Queries for Smaller Screens*/
@media screen and (max-width: 768px) {
  #main {
    padding: 1rem; /* Adjust padding on smaller screens */
  }
  
  .ui.menu .item {
    padding: 0.3rem 0.5rem; /* Reduce padding on smaller screens */
  }
}
</style>
