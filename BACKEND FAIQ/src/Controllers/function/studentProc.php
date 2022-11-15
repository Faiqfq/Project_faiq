<?php 
//get all STUDENT 
function getAllstudent($db) {

    
    $sql = 'Select * FROM student '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get STUDENT by id 
function getstudent($db, $studentId) {

    $sql = 'Select o.studentName, o.courseName, o.phoneNumber, o.semester, o.age FROM student o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $studentId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new STUDENT 
function createstudent($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into student ( studentName, courseName, phoneNumber, semester, age)'; 
    $sql .= 'values (:studentName, :courseName, :phoneNumber, :semester, :age)';  
    $stmt = $db->prepare ($sql); 
    $stmt->bindParam(':studentName', $form_data['studentName']);  
    $stmt->bindParam(':courseName', ($form_data['courseName']));
    $stmt->bindParam(':phoneNumber', ($form_data['phoneNumber']));
    $stmt->bindParam(':semester', ($form_data['semester']));
    $stmt->bindParam(':age', ($form_data['age']));
    $stmt->execute(); 
    return $db->lastInsertID();
}


//delete STUDENT by id 
function deletestudent($db,$studentId) { 

    $sql = ' Delete from student where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$studentId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update STUDENT by id 
function updatestudent($db,$form_dat,$studentId) { 

    
    $sql = 'UPDATE student SET studentName = :studentName , courseName = :courseName , phoneNumber = :phoneNumber , semester = :semester , age = :age'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$studentId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':studentName', $form_dat['studentName']);    
    $stmt->bindParam(':courseName', ($form_dat['courseName']));
    $stmt->bindParam(':phoneNumber', ($form_dat['phoneNumber']));
    $stmt->bindParam(':semester', ($form_dat['semester']));
    $stmt->bindParam(':age', ($form_dat['age']));
    $stmt->execute(); 
}