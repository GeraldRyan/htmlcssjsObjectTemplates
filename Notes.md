# Path to True Mastery
This is the game of UI Algorithms- how to solve UI/Layout problems, particular (carousal) and general (methods and strategies)
- Learn simple things (that form the basis of complex impressive things). Master and drill. No excuse for not knowing the basics of a topic (including design) (except maybe time, in which case daily progress = pass)
- Better when something is backwards engineered, including concepts backwards engineered or extracted through study and building of what works. Requires practice and often note taking. 

# NOTE, COMMENTS ARE AN IMPORTANT PART OF THE CONTENT BUT DO NOT DISPLAY IN RENDERED MD. VIEW RAW!!
<!-- easier on the eyes for author to read -->

(css!) => Pure CSS (as a possibile approach)  
(js!) => JS required  
(d) => defaul
(a) => animatable

### Advanced CSS Properties

box-sizing:border-box 
<!-- enables including padding and border in an element's total w+h -->

object-fit: 
<!-- how an <img> or <video> should be resized to fit its container. -->
 <!-- Options:  -->
  - fill(d) => image resized to fill given dimensions, aspect ratio (ar) be damned
  - contain => preserves ar, resized to fit given dim
  - cover => preserves ar, fills given dim, clipped to fit => Clips
  - none => image not resized
  - scale-down => scaled down to smallest version of none or contain

transform: 
<!-- VERY POWERFUL PROPERTY in Modern Web Design -->
<!-- Rotate, scale, move or skew 2d or 3d element  -->
<!-- Learn transform and discover one of basic most powerful rendering UI tools. Can't do great CSS without transform -->
<!-- Modifies co-ordinate space of CSS visual formatting model -->
<!-- Options -->
takes one of several functions: rotate(360deg), skwew (sheer transformation), translate, scale, 2d, 3d, matrix (bulk);  
Each function can have a lot said about it. Well maybe not translate, scale, rotate, but matrix, perspective, skew.
Perspective defines distance bw user and z=0 plane.  

transition: 
 - Shorthand property for -property,-duration,-timing-function,-delay
 - transition-timing sets how Intermediate Values are calculated for properties affected by transition effect
 - CSS is a calculator!!! 
 - transition-timing-functions include: linear(d), ease-in, steps, cubic-bezier (generic version others like ease-in, linear)
 - cubic-bezier is useful. It can be the race and slow dosn just before end, or start slow and quicken
 - https://cubic-bezier.com/#.06,.31,0,1
 - btw transition-timing-function useful for UI, can guide users to understand what's expected, show relationships within UI, inform users what actions occured, reduce cognitive load. If I don't learn this, who will? I'll hand it off to other guy, he gets glory and money? Or I own it. 
 - 


border-radius:
<!-- You know what it does, you've used it. To remember it, think about it's name  -->
<!-- It also has a 1-to-4 value syntax (like margin or padding) -->
<!-- Ergo you can style individual corners differently -->

:not(element,[list, of, other, items]) pseudoselector => selects anything that is not that, which is its arg. 
<!-- There's math and functions in CSS -->
- can use pseudoselector as its operand. Seen in wild: 
  - a:not(:last-child) : Actually really powerful. Can color all grey except last which is green. Upgrading to combo. 

Selector:last-child, :first-child, :nth-child(n), :hover, :focus
<!-- selector at child level (i.e. not at palrent) Does not even need parent (anymore) -->

outline-style: Draws elements outline- even outside the border. Didn't know anything went beyond that.

overflow(sh) => shorthand for -x/-y => visible (spills), hidden (clips), scroll, auto 

**Shorthand properties cheatsheet**
<!-- reminder if values aren't set in shorthand they override previous values with inherit -->
- background (*color,image,repeat,position)
- font (*style, weight, size, height, family)
- you've been using border and margin shorthands already. 

### Events(e)/Interfaces)(i) and Listeners (l)

MouseEvent(i) called by 'click'|'dblclick'|'mouseup'|'mousedown'|'mousemove'
   (WheelEvent, DragEvent) < MouseEvent < UIEvent < Event 
    MouseEvent.clientX => X coordinate of viewport | e.screenX (global screen coordinates)  
    e.altKey can read if alt/ctrl/shift keys were pressed
    many co-ordinate based (x,y) getters. Read the docs. 




### Advanced HTML  
<iframe> => renders a whole new document object within a document object, viewport or browser window. 
<!-- Returns double flaoting point -->
<!-- used on mozilla.org to do demos. Classname used is 'sample-code-frame'. Should be self explanatory. Sandbox of demo in their case.  -->




### Patterns and Combinations seen in wild
1. querySelectorAll += loop += attach eventlistener/ callback function to each:
  -- Some elements can be invibisle or inaccessible to user in present state, requiring changes to allow opening (e.g. tree structure)
2. transform translate(x) transition --> trans trans trans
3. a:not(:last-child) --> get all but last. Duck Duck Greyduck
4. mousedown + mousemove + mouseup combo for drawing or dragging 
5. Position: Relative of Parent (does not move element unless you specify top|bottom|left|right-- but adds a new formatting context)
<!-- 5. position:relative top:50px left:50px anchor a button inside another component -->

### Learning Stack
-Media Queries  
-Animation  

## Components of a modern website  
Just look around (as this repo is built up)

Buttons Buttons. What is a button, what makes a button a button? It's semantic to use a <button> tag but isn't <a> also semantic? in just a few lines of css Moz;//a on codepen rendered <a> tags to look like buttons (while illustrating transition). Form and function. They wanted to illustrate transition. Color was the transition property, duration was 1 second (interval), timing func was ease-out.  


# Personal Notes:
Must understand the event model. You're getting a good handle on the DOM model. You thought you knew the box model but today you learned and read about the box tree generation, and flow. There is so much more to learn. Beware of false expectations from ignorance (i.e. you shouldn't be able to do stuff without certain knowledge that you don't even know you don't have. Get the knowledge and then assess yourself).
Event model is next big thing. See events as triggers. See them as values passed. HOw are they captured? What data/payload do they carry (e.g. target/.value)? Click is key event easy to understand, but get broader. Load event. Think more abstractly, like a machine. Like the compiler/interpreter/renderer. Mouseover events. Event listeners-- they consume resources? So an element is what listens, when instructed to by JS? JS instructs client browser to assign listener to given element, and it consumes resources? Does it tick or poll? Does it require garbage collection (at least in edge cases? -- there must be a reason why my forward/backwards buttons snapped quick but when I did the same functionality with keypresses inside modal, by 5th forward press it was lagging and hanging. Is this garbage collection thing, or node --hmm yeah, if node element is removed from DOM, seems it would follow the listener is too, but if the listener is more general to the container or a node that won't be taken away, it would linger. But did I add multiple on each page of modal? And how dose that work 'time complexity' wise. Is it O(n)? If so, it shouldn't hang after 5. Curious. And what when they have the same function (actually same listener function on same key. Do they override?)
Transition is an event, whose parent is event. 
- Does this mean the coding or abstract model of CSS is OOP? It is OOP like, even if its implementation is not, which I wouldn't see why it's not. It is. It has to be. But they talk of inheritance. Event is parent. TransitionEvent is one child of Event parent. Think in OOP terms. Will help your career, to start thinking early, often and at highest levels of hierarchy. 

I think I struggled with UI because I never dove deep into it. There are so many places to get templaes. You have to have a core base independent understanding though. Templates should not be a crutch but a tool that you can totally wield and work your way around. But they're everywhere. But to really master this you have to study systematically. 