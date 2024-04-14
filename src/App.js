import './App.css';

function Viena(display) {
  return (
    <div className="wrapper">
      <p className="fullname">{display.fullname}</p>
    </div>
  );
};

function Viena2() {
  return (
    <div class="container">
        <div class="quadrant1">
            <div class="one">
                <p>1</p>
            </div>
            <div class="two">
                <p>2</p>
            </div>
        </div>

        <div class="quadrant2">
            <div class="three">
                <p>3</p>
            </div>
            <div class="four">
                <p>4</p>
            </div>
        </div>

        <div class="quadrant3">
            <div class="five">
                <p>5</p>
            </div>
            <div class="six">
                <p>6</p>
            </div>
        </div>

        <div class="quadrant4">
            <div class="seven">
                <p>7</p>
            </div>
            <div class="eight">
                <p>8</p>
            </div>
        </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Viena fullname="Patrick Viena" />
      <Viena2 />
    </div>
  );
};