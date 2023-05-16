
//// html elements ////

const viewNodesEdgesButton = document.querySelector("#view-nodes-edges-button");
const addNodeInputButton = document.querySelector("#add-node-button");
const updateNodeInputButton = document.querySelector("#update-node-button");
const removeNodeInputButton = document.querySelector("#remove-node-button");
const addEdgeInputButton = document.querySelector("#add-edge-button");
const updateEdgeInputButton = document.querySelector("#update-edge-button");
const removeEdgeInputButton = document.querySelector("#remove-edge-button");

const addNodeInputContainer = document.querySelector("#add-node-input-container");
const updateNodeInputContainer = document.querySelector("#update-node-input-container");
const deleteNodeInputContainer = document.querySelector("#delete-node-input-container");
const addEdgeInputContainer = document.querySelector("#add-edge-input-container");
const updateEdgeInputContainer = document.querySelector("#update-edge-input-container");
const deleteEdgeInputContainer = document.querySelector("#delete-edge-input-container");

const viewInfoContainer = document.querySelector("#view-info-container");

const closeInfoButton = document.querySelector('#close-info');

const addNodeButton = document.querySelector("#a-node-button");
const updateNodeButton = document.querySelector("#u-node-button");
const removeNodeButton = document.querySelector("#d-node-button");
const addEdgeButton = document.querySelector("#a-edge-button");
const updateEdgeButton = document.querySelector("#u-edge-button");
const removeEdgeButton = document.querySelector("#d-edge-button");

const unsuccessfullyMessageNotification = document.querySelector('.unsuccessfully-message-notification');
const successfullyMessageNotification = document.querySelector('.successfully-message-notification');
const warningMessageNotification = document.querySelector('.warning-message-notification');

//// options listeners ////

viewNodesEdgesButton.addEventListener("click", function () {
    viewInfoContainer.style.display = "flex";
    viewNodesEdgesButton.style.backgroundColor = "#CD5C5C";
});

closeInfoButton.addEventListener("click", function () {
  viewInfoContainer.style.display = "none";
  viewNodesEdgesButton.style.backgroundColor = "#1E90FF";
});

addNodeInputButton.addEventListener("click", function () {
  addNodeInputContainer.style.display = "flex";
  updateNodeInputContainer.style.display = "none";
  deleteNodeInputContainer.style.display = "none";
  addEdgeInputContainer.style.display = "none";
  updateEdgeInputContainer.style.display = "none";
  deleteEdgeInputContainer.style.display = "none";

  addNodeInputButton.style.backgroundColor = "#DEB887";
  updateNodeInputButton.style.backgroundColor = "#1E90FF";
  removeNodeInputButton.style.backgroundColor = "#1E90FF";
  addEdgeInputButton.style.backgroundColor = "#1E90FF";
  updateEdgeInputButton.style.backgroundColor = "#1E90FF";
  removeEdgeInputButton.style.backgroundColor = "#1E90FF";
});

updateNodeInputButton.addEventListener("click", function () {
  updateNodeInputContainer.style.display = "flex";
  addNodeInputContainer.style.display = "none";
  deleteNodeInputContainer.style.display = "none";
  addEdgeInputContainer.style.display = "none";
  updateEdgeInputContainer.style.display = "none";
  deleteEdgeInputContainer.style.display = "none";

  addNodeInputButton.style.backgroundColor = "#1E90FF";
  updateNodeInputButton.style.backgroundColor = "#DEB887";
  removeNodeInputButton.style.backgroundColor = "#1E90FF";
  addEdgeInputButton.style.backgroundColor = "#1E90FF";
  updateEdgeInputButton.style.backgroundColor = "#1E90FF";
  removeEdgeInputButton.style.backgroundColor = "#1E90FF";
});

removeNodeInputButton.addEventListener("click", function () {
  deleteNodeInputContainer.style.display = "flex";
  addNodeInputContainer.style.display = "none";
  updateNodeInputContainer.style.display = "none";
  addEdgeInputContainer.style.display = "none";
  updateEdgeInputContainer.style.display = "none";
  deleteEdgeInputContainer.style.display = "none";

  addNodeInputButton.style.backgroundColor = "#1E90FF";
  updateNodeInputButton.style.backgroundColor = "#1E90FF";
  removeNodeInputButton.style.backgroundColor = "#DEB887";
  addEdgeInputButton.style.backgroundColor = "#1E90FF";
  updateEdgeInputButton.style.backgroundColor = "#1E90FF";
  removeEdgeInputButton.style.backgroundColor = "#1E90FF";
});

addEdgeInputButton.addEventListener("click", function () {
  addEdgeInputContainer.style.display = "flex";
  addNodeInputContainer.style.display = "none";
  updateNodeInputContainer.style.display = "none";
  deleteNodeInputContainer.style.display = "none";
  updateEdgeInputContainer.style.display = "none";
  deleteEdgeInputContainer.style.display = "none";

  addNodeInputButton.style.backgroundColor = "#1E90FF";
  updateNodeInputButton.style.backgroundColor = "#1E90FF";
  removeNodeInputButton.style.backgroundColor = "#1E90FF";
  addEdgeInputButton.style.backgroundColor = "#DEB887";
  updateEdgeInputButton.style.backgroundColor = "#1E90FF";
  removeEdgeInputButton.style.backgroundColor = "#1E90FF";
});

updateEdgeInputButton.addEventListener("click", function () {
  updateEdgeInputContainer.style.display = "flex";
  addNodeInputContainer.style.display = "none";
  updateNodeInputContainer.style.display = "none";
  deleteNodeInputContainer.style.display = "none";
  addEdgeInputContainer.style.display = "none";
  deleteEdgeInputContainer.style.display = "none";

  addNodeInputButton.style.backgroundColor = "#1E90FF";
  updateNodeInputButton.style.backgroundColor = "#1E90FF";
  removeNodeInputButton.style.backgroundColor = "#1E90FF";
  addEdgeInputButton.style.backgroundColor = "#1E90FF";
  updateEdgeInputButton.style.backgroundColor = "#DEB887";
  removeEdgeInputButton.style.backgroundColor = "#1E90FF";
});

removeEdgeInputButton.addEventListener("click", function () {
  deleteEdgeInputContainer.style.display = "flex";
  addNodeInputContainer.style.display = "none";
  updateNodeInputContainer.style.display = "none";
  deleteNodeInputContainer.style.display = "none";
  addEdgeInputContainer.style.display = "none";
  updateEdgeInputContainer.style.display = "none";

  addNodeInputButton.style.backgroundColor = "#1E90FF";
  updateNodeInputButton.style.backgroundColor = "#1E90FF";
  removeNodeInputButton.style.backgroundColor = "#1E90FF";
  addEdgeInputButton.style.backgroundColor = "#1E90FF";
  updateEdgeInputButton.style.backgroundColor = "#1E90FF";
  removeEdgeInputButton.style.backgroundColor = "#DEB887";
});

let nodes, edges, graph;

//method to stringify a JSON object
function toJSON(obj) {
  return JSON.stringify(obj, null, 4);
}

//function that adds a node to the graph 
function addNode() {
  
  try {
    if(document.getElementById("a-node-id").value === '' || document.getElementById("a-node-key").value === '')
    {
      throw "Fields are not filled";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
                
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;

    nodes.forEach(node => {
      if(node.label == document.getElementById("a-node-key").value)
      {
        found = 1;
      }
    })

    if(found == 1)
    {
      throw "Key " + document.getElementById("a-node-key").value + " already exist";
    }
  }
  catch(err) {
    unsuccessfullyMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
                
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  
    unsuccessfullyMessageNotification.style.display = "block";
    return null;
  }
  
  try {
    nodes.add({
      id: document.getElementById("a-node-id").value,
      label: document.getElementById("a-node-key").value,
    });

    successfullyMessageNotification.innerHTML = '<i class="far fa-check-circle"></i>' + '   Node was succesfully added to graph';
    successfullyMessageNotification.style.display = "block";

    setTimeout(function() {
      successfullyMessageNotification.style.display = "none";
    }, 3000);
  } 
  catch (err) {
    unsuccessfullyMessageNotification.innerHTML = '<i class="far fa-times-circle"></i>' + '    Node with id ' + document.getElementById("a-node-id").value + ' already exists';
    unsuccessfullyMessageNotification.style.display = "block";
        
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  }
}

//function that updates the key of a node
function updateNode() {

  try {
    if(document.getElementById("u-node-id").value === '' || document.getElementById("u-node-key").value === '')
    {
      throw "Fields are not filled";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;

    nodes.forEach(node => {
      if(node.id == document.getElementById("u-node-id").value)
      {
        found = 1;
      }
    })
      
    if(found == 0)
    {
      throw "Node with id " + document.getElementById("u-node-id").value + " doesn't exist";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;
    
    nodes.forEach(node => {
      if(node.label == document.getElementById("u-node-key").value)
      {
        found = 1;
      }
    })

    if(found == 1)
    {
      throw "Key " + document.getElementById("u-node-key").value + " already exist";
    }
  }
  catch(err) {
    unsuccessfullyMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);

    unsuccessfullyMessageNotification.style.display = "block";
    return null;
  }

  try {
    nodes.update({
      id: document.getElementById("u-node-id").value,
      label: document.getElementById("u-node-key").value,
    });

    successfullyMessageNotification.innerHTML = '<i class="far fa-check-circle"></i>' + '   Key was succesfully updated for node ' +  document.getElementById("u-node-id").value;
    successfullyMessageNotification.style.display = "block";

    setTimeout(function() {
      successfullyMessageNotification.style.display = "none";
    }, 3000);
  } 
  catch (err) {
    unsuccessfullyMessageNotification.innerHTML = '<i class="far fa-times-circle"></i>' + err;
    unsuccessfullyMessageNotification.style.display = "block";
        
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  }
}

//function that deletes a node from the graph
function removeNode() {
  
  try {
    if(document.getElementById("d-node-id").value === '')
    {
      throw "Fields are not filled";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;
    
    nodes.forEach(node => {
      if(node.id == document.getElementById("d-node-id").value)
      {
        found = 1;
      }
    })
      
    if(found == 0)
    {
      throw "Node with id " + document.getElementById("d-node-id").value + " doesn't exist";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }
  
  try {
    nodes.remove({ id: document.getElementById("d-node-id").value });

    successfullyMessageNotification.innerHTML = '<i class="far fa-check-circle"></i>' + '   Node with id ' +  document.getElementById("d-node-id").value + ' was succesfully removed';
    successfullyMessageNotification.style.display = "block";

    setTimeout(function() {
      successfullyMessageNotification.style.display = "none";
    }, 3000);
  } 
  catch (err) {
    unsuccessfullyMessageNotification.innerHTML = '<i class="far fa-times-circle"></i>' + err;
    unsuccessfullyMessageNotification.style.display = "block";
        
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  }
}

//function that adds a edge to the graph 
function addEdge() {
  
  try {
    if(document.getElementById("a-edge-id").value === '' || document.getElementById("a-edge-from").value === '' || document.getElementById("a-edge-to").value === '' || document.getElementById("a-edge-value").value === '')
    {
      throw "Fields are not filled";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;
    
    nodes.forEach(node => {
      if(node.id == document.getElementById("a-edge-from").value)
      {
        found = 1;
      }
    })
      
    if(found == 0)
    {
      throw "Node with id " + document.getElementById("a-edge-from").value + " doesn't exist";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;
    
    nodes.forEach(node => {
      if(node.id == document.getElementById("a-edge-to").value)
      {
        found = 1;
      }
    })
      
    if(found == 0)
    {
      throw "Node with id " + document.getElementById("a-edge-to").value + " doesn't exist";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }
  
  try {
    edges.add({
      id: document.getElementById("a-edge-id").value,
      from: document.getElementById("a-edge-from").value,
      to: document.getElementById("a-edge-to").value,
      label: document.getElementById("a-edge-value").value,
      arrows: 'to',
      color: 'green',
    });
    
    successfullyMessageNotification.innerHTML = '<i class="far fa-check-circle"></i>' + '   Edge was succesfully added to graph';
    successfullyMessageNotification.style.display = "block";

    setTimeout(function() {
      successfullyMessageNotification.style.display = "none";
    }, 3000);

  } 
  catch (err) {
    unsuccessfullyMessageNotification.innerHTML = '<i class="far fa-times-circle"></i>' + '    Edge with id ' + document.getElementById("a-edge-id").value + ' already exists';
    unsuccessfullyMessageNotification.style.display = "block";
        
    setTimeout(function() {
        unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  }
}

//function that updates the value of a edge
function updateEdge() {
  
  try {
    if(document.getElementById("u-edge-id").value === '' ||  document.getElementById("u-edge-value").value === '')
    {
      throw "Fields are not filled";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try
  {
    let found = 0;
    
    edges.forEach(edge => {
      if(edge.id == document.getElementById("u-edge-id").value)
      {
        found = 1;
      }
    })
      
    if(found == 0)
    {
      throw "Edge with id " + document.getElementById("u-edge-id").value + " doesn't exist";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }
  
  try {
    edges.update({
      id: document.getElementById("u-edge-id").value,
      label: document.getElementById("u-edge-value").value,
    });
    
    successfullyMessageNotification.innerHTML = '<i class="far fa-check-circle"></i>' + '   Value was succesfully updated for edge ' +  document.getElementById("u-edge-id").value;
    successfullyMessageNotification.style.display = "block";

    setTimeout(function() {
      successfullyMessageNotification.style.display = "none";
    }, 3000);
  } 
  catch (err) {

    unsuccessfullyMessageNotification.innerHTML = '<i class="far fa-times-circle"></i>' + err;
    unsuccessfullyMessageNotification.style.display = "block";
        
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  }
}

//function that deletes a edge from the graph
function removeEdge() {
  
  try {
    if(document.getElementById("d-edge-id").value === '')
    {
      throw "Fields are not filled";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }

  try {
    let found = 0;
    
    edges.forEach(edge => {
      if(edge.id == document.getElementById("d-edge-id").value)
      {
        found = 1;
      }
    })
      
    if(found == 0)
    {
      throw "Edge with id " + document.getElementById("d-edge-id").value + " doesn't exist";
    }
  }
  catch(err) {
    warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
              
    setTimeout(function() {
      warningMessageNotification.style.display = "none";
    }, 3000);

    warningMessageNotification.style.display = "block";
    return null;
  }
  
  try {
    edges.remove({ id: document.getElementById("d-edge-id").value });

    successfullyMessageNotification.innerHTML = '<i class="far fa-check-circle"></i>' + '   Edge with id ' +  document.getElementById("d-edge-id").value + ' was succesfully removed';
    successfullyMessageNotification.style.display = "block";

    setTimeout(function() {
      successfullyMessageNotification.style.display = "none";
    }, 3000);
  } 
  catch (err) {

    unsuccessfullyMessageNotification.innerHTML = '<i class="far fa-times-circle"></i>' + err;
    unsuccessfullyMessageNotification.style.display = "block";
        
    setTimeout(function() {
      unsuccessfullyMessageNotification.style.display = "none";
    }, 3000);
  }
}


addNodeButton.addEventListener("click", function () {
  addNode();
});

updateNodeButton.addEventListener("click", function () {
  updateNode();
});

removeNodeButton.addEventListener("click", function () {
  removeNode();
});

addEdgeButton.addEventListener("click", function () {
  addEdge();
});

updateEdgeButton.addEventListener("click", function () {
  updateEdge();
});

removeEdgeButton.addEventListener("click", function () {
  removeEdge();
});

function draw() {

  // create an array with nodes

  nodes = new vis.DataSet();

  nodes.on("*", function () { 
    document.getElementById("info-nodes").innerText = JSON.stringify(nodes.get(), null, 4);
  });

  // create an array with edges

  edges = new vis.DataSet();

  edges.on("*", function () {
    document.getElementById("info-edges").innerText = JSON.stringify(edges.get(), null, 4);
  });

  // create a network

  var container = document.getElementById("graph-container");

  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {};
  graph = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});