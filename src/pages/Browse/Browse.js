// import React from 'react';
// import Box1 from '../Assets/box1.png';
// import Box2 from '../Assets/box2.png';
// import Box3 from '../Assets/box3.png';
// import werewolf from '../Assets/werewolf.png';
// import { GrAddCircle } from 'react-icons/gr';
// import './Browse.css'

// const Browse = () => {
//     return (
//       <>
//       <div className='browse-card'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-sm-12 col-md-6 col-lg-4'>
//               <div className='browse-card-image'>
//                 <img src={Box1} alt="box1"/>
//               </div>
//               <div className='browse-box-2'>
//               <div className='browse-card-book-image'>
//                 <img src={werewolf} alt="Werewolf"/>
//                 <div className='browse-card-content-button'>
//                   <h3>The Werewolf of Paris</h3>
//                   <h5>Author: Guy Endore </h5>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//               </div>
//             </div>
//             <div className='col-sm-12 col-md-6 col-lg-4'>
//               <div className='browse-card-image'>
//                 <img src={Box2} alt="box1"/>
//               </div>
//               <div className='browse-box-2'>
//               <div className='browse-card-book-image'>
//                 <img src={werewolf} alt="Werewolf"/>
//                 <div className='browse-card-content-button'>
//                   <h3>The Werewolf of Paris</h3>
//                   <h5>Author: Guy Endore </h5>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//               </div>
//             </div>
//             <div className='col-sm-12 col-md-6 col-lg-4'>
//               <div className='browse-card-image'>
//                 <img src={Box3} alt="box1"/>
//               </div>
//               <div className='browse-box-2'>
//               <div className='browse-card-book-image'>
//                 <img src={werewolf} alt="Werewolf"/>
//                 <div className='browse-card-content-button'>
//                   <h3>The Werewolf of Paris</h3>
//                   <h5>Author: Guy Endore </h5>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//          <div className='browse-book-content'>
//           <div className='container'>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>1</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>2</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>3</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>4</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>5</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>6</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>7</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>8</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>9</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-sm-12 col-md-1 col-lg-1'>
//                 <div className='serial-no'>
//                   <h1>10</h1>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-2 col-lg-2'>
//                 <div className='browse-book-content-image'>
//                 <img src={werewolf} alt="werewolf"/>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-6 col-lg-7'>
//                 <div className='browse-book-content-text'>
//                   <h1>The Alpha king Doughter</h1>
//                   <h5>Author : Jane Doe </h5>
//                   <p>element also help users whoelp users who have difficulty clicking on ver very small regions (such as 
//                   radio buttons or ement also help users whoelp users who have difficulty clicking on ver very small</p>
//                 </div>
//               </div>
//               <div className='col-sm-12 col-md-3 col-lg-2'>
//                 <div className='browse-book-content-button'>
//                   <button>Read</button>
//                   <h5><GrAddCircle/>Add to Library</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> 
//         </>
//     )
// }

// export default Browse
