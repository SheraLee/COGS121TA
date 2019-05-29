# Milestone 5


## How target user would use your app in order to help them achieve relevant goals.

Our target users are professors teaching in larger classrooms.

Due to the large amount of students in the classroom, professors need a better way to control the class. Our app can increase interactions between professors and students during class and help professors get more timely feedback from students to improve the class experience without interrupting the lecture. 


1) In class feedbacks

  In our slides page, students can ask questions in class, the professor can adjust his pace based on those quetion and feedbacks. If the instructor do not address a specific problem in class, the TAs can also answer in the comment sections. This ensures that every students will be able to follow the pace of the professor   


2) Compare with the past classes

  Besides those short period feedbacks from students, the professor can also compare his class with past year classes to check if his class is in good progress.This can provide teh professor a big picture of how the class is going. 


## Visualization Upgrade Pictures and Future Ideas

### Sides Page 
![slides](/milestone_5_pictures/slides.png)
![slides](/milestone_5_pictures/comment.png)

1) UI improvment 

  Originally in this page, we only have a question section. Professor's comments, solved and unsolved comments are all mixed in the same area. Now, we devide it to three different segment . It looks more neat and use the screen space more efficiently. The profile picture and button also has been adjust to look better.

2) Data Display Improvement

  New question segment sort data by category and dispaly them in better position of the page. The unsolved question is at the top, which ca catch more attention. Instructor's comments has bee moved down, scince it is probaly less important to the professor.  

3) More ambitious data display

  In the future, we may show the question in the order of how many students has the same problems. We may can also get the sentimental score of those questions to show those ergent question at the top, or color coding the.


### Statistics Page
![slides](/milestone_5_pictures/evaluation.png)

1) UI Improvement

  This time we used the card-column class from bootstrap to have responsive rows/columns and to have them
  properly spaced out. We also split up statistics into their own individual card for the user to make it easier for the user. 

2) Data Display Improvement

  For this iteration, we added a couple of things. first big display we addded was a word cloud that takes in data from a connected google sheet and displays the words on various sizes(depending on the word count). Since we're using a infogram to embeded the word cloud, we unfortunately cannot get the data in real time and as a result, we need to manually reload the data from their site. Another thing we added was the piechart using google's API. This gathers data from our firebase and displays it as a piechart. Finally, our Class average GPA is connected to the firebase and will update based on the students grade.

3) More Ambitious Data Display

  For future visualization ideas, we would prefer that our word cloud be updated synchronously to help keep the user up to date. Another visualization idea that we had in mind, was the ability to show off more misc. information. Due to time constraints, we’re only able to visualize some of our data that could be gathered from students. Another idea that we had in mind was the ability to add some form of visualization to the active session. Visualization in the active session can help display the answers that students give and can be helpful for both teacher and student.


## Other UI upgrades

### Side NavBar and Crumbs
![slides](/milestone_5_pictures/sidebar.PNG)
  
  For this minor upgrade, we decided to move the "Find Classes" and "My Classes" link to the side navbar. We also decided to add breadcrumbs to the top of the interface to help users see where they are and also give them the ability to go back to a specific page.
