function About() {

    return (
        <div className="text-left">
            <h2 className="text-center display-4 my-4">About</h2>

            <p className="lead">
                This app is part of a school project submission inline with the criteria.
                The following is the given project instructions and criteria:
            </p>
            <p>
                For this Capstone Project, you will be tasked to create a simple game using React.
                To be able to successfully do this, you will need to consolidate all the concepts you
                have learned about React, JSX and JavaScript so far.
                <br/>
                Create a React app that allows users to play Hangman. The game picks a random
                word, which the user must then attempt to guess letter-by-letter. Too many
                incorrect guesses result in loss of the game. Iconically the process of losing is
                depicted by your character being hanged.
            </p>
            <p>The game you create should meet the following criteria:</p>
            <ol className="rounded py-3 project-list mb-4">
                <li>
                    It should be created using Create React App
                </li>
                <li>
                    It should include attractively styled components (at least 4 different types of
                    components) that respond to user interaction. Feel free to use
                    React-Bootstrap or another library and/or your own custom stylesheets.
                </li>
                <li>
                    A number of components should be rendered using the array.Map()
                    method. Each component rendered in this way should have a key that
                    uniquely identifies it (see Task: React II).
                </li>
                <li>
                    User interaction should modify the state of some components
                </li>
                <li>
                    The state of two or more components should be synced.
                </li>
                <li>
                    The user should be able to restart the game.
                </li>
                <li>
                    The user should be clearly informed if they have “won” or “lost” the game
                </li>
                <li>
                    The user should easily be able to request “help” that will inform the user 
                    about the rules of the game from the UI.
                </li>
                <li>
                    The UI should be attractive, easy to use and intuitive.
                </li>
                <li>
                    It should include a file called “readme.md” which explains the rules of the
                    game. This file should also provide clear instructions that an end user will be
                    able to follow to be able to install and run your app on their local machine.
                </li>
                <li>
                    Your mentor should be able to launch your app by typing ‘npm start’ from
                    the command line interface.
                </li>
                <li>
                    The file structure of the project should be well organized in line with
                    guidelines. The code should also be easy to read adhering to Google’s
                    style guide about indentation, meaningful variable and component names etc
                </li>
                <li>
                    Your code should be well documented with appropriate comments.
                </li>
            </ol>

            <ul className="list-unstyled">
                <li><a href="https://github.com/simphiwe-nkabinde/React-Hangman-Project">Github Repo</a></li>
                <li><a href="https://github.com/simphiwe-nkabinde">My Github Profile: Simphiwe Nkabinde</a></li>
            </ul>

            <div className="my-5">.</div>
        </div>
    )
}

export default About