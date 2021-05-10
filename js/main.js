// Green glow: [[b;#44D544;]
// White glow: [[g;#EEEEEE;]

/*jQuery(document).ready(function($) {

    $('body').terminal({
        echo: function(arg1) {
            this.echo(arg1);
        },
        calc: {
            add: function(a, b) {
                this.echo(a+b);
            },
            sub: function(a, b) {
                this.echo(a-b);
            }
        }
    }, 
    { prompt: '>', greeting: false });
});
*/
var user = "Esteemed-User";

var highlight = function(text, color){
    return "[[g;#44D544;]" + text + "]";
}


var greeting = "[[g;#44D544;]                                      \n"+
        "                                               __              \n"+
        " _ _ _ _____ __    _____ _____ _____ _____    |  |             \n"+
        "| | | |   __|  |  |     |     |     |   __|   |__|             \n"+
        "| | | |   __|  |__|   --|  |  | | | |   __|    __              \n"+
        "|_____|_____|_____|_____|_____|_|_|_|_____|   |__|             ]\n\n" +
        "This is my command line interface website: to get started, type [[g;#44D544;]'help'] to see what commands are available. \n\n"
        + "For a less interactive, more aesthetic version of my website type the word [[g;#44D544;]'normal']!\n\n";


var App = {

    about: function() {
        this.exec('whoami');
    },


    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },


    help: function() {
      showHelp(this);

        if(ga != undefined) ga('send', 'event', 'help');
    },

    ls: function() {
            this.exec("help");
    },


    normal: function() {
        this.echo("https://yifr.github.io/");
    },


    whoami: function() {
        this.echo()
        this.echo("Hi! My name is " + highlight('Yoni Friedman') + ". I'm a student in the Rutgers University Honors Program pursuing a dual degree in computer and cognitive science.");
        this.echo("I'm fascinated by the way our brain perceives the world around us and creates the mind we live in.");
        this.echo("This has led me to the study of Artificial Intelligence, a field which combines my passion for tech and cognitive science.\n");
        this.echo("In my spare time I like to read books or perform with my band, Kovatova. You can listen to our music here: https://kovatova.bandcamp.com/releases\n")
    },


    contact: function() {
        this.echo("Email: yoniifriedman@gmail.com");
        this.echo("LinkedIn: https://www.linkedin.com/in/yoni-friedman-67806613b/");
        this.echo("Github: https://github.com/yifr");
    },


    credits: function(){
        this.echo();
        this.echo("|  Site built by " + highlight('Yoni Friedman'));
        this.echo("|  Using " + highlight('Jquery Terminal Emulator') + " by " + highlight('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
        this.echo();
    },

    welcome: function() {
        this.exec('clear');
        this.echo(greeting);
    },

    resume: function() {
        this.exec('clear');
        this.echo(highlight('=============================================================================='));
        this.echo("[[g;#EEEEEE;] ,------,------. ,--. ,--.,-----. ,---.,--------,--.,-----.,--.  ,--. \n"+
                              " |  .---|  .-.  \\|  | |  '  .--.//  O  '--.  .--|  '  .-.  |  ,''|  | \n"+ 
                              " |  `-- |  |  \\  |  | |  |  |   |  .-.  | |  |  |  |  | |  |  |' '  | \n"+
                              " |  `---|  '--'  '  '-'  '  '--'|  | |  | |  |  |  '  '-'  |  | `   | \n"+
                              " `------`-------' `-----' `-----`--' `--' `--'  `--'`-----'`--'  `--' ]");
        this.echo()
        this.echo("[[g;#44D544;]Rutgers University], New Brunswick, NJ");
        this.echo("[[g;#44D544;]Honors Program] - School of Arts and Sciences, Sep 2016 - May 2020");
        this.echo("Expected B.S in [[g;#44D544;]Computer Science] and [[g;#44D544;]Cognitive Science]");
        this.echo("GPA: [[g;#44D544;]3.67]")

        this.echo();
        this.echo();

        this.echo(highlight('--------------------------------------------------------------------------'));
        this.echo("[[g;#EEEEEE;],------,--.   ,--,------.,------,------.,--,------,--.  ,--.,-----,------. \n"+
                               "|  .---'\\  `.'  /|  .--. |  .---|  .--. |  |  .---|  ,'.|  '  .--.|  .---' \n"+
                               "|  `--,  .'     \\|  '--' |  `--,|  '--'.|  |  `--,|  |' '  |  |   |  `--,  \n"+
                               "|  `---./  .'.   |  | --'|  `---|  |\\  \\|  |  `---|  | `   '  '--'|  `---. \n"+
                               "`------'--'   '--`--'    `------`--' '--`--`------`--'  `--'`-----`------' \n]");
        this.echo()
        this.echo(highlight("Dun & Bradstreet"));
        this.echo("|\t--Software Engineering Intern");
        this.echo('|\t\t- Worked with the Advanced Analytics team to create an interface to help automate the process of data analytics and machine learning');
        this.echo('|\t\t- Interface built in an Agile environment using Django, Angularjs, and Hadoop');
        this.echo('|\t\t- One of top 5% of interns asked to extend internship.');

        this.echo();
        this.echo(highlight("Computational Brain Lab"));
        this.echo("|\t--Research Assistant");
        this.echo("|\t\t- Researched cutting edge spiking neural networks designed to solve problems by simulating biological realistic neurons");
        this.echo("|\t\t- Investigated the application of spiking neural networks to solve classic problems in Artificial Intelligence, such as digit recognition");
        

        this.echo();
        this.echo();

        this.echo(highlight('--------------------------------------------------------------------------'));
        this.echo("[[g;#EEEEEE;]  ,---. ,--. ,--,--,--.  ,--.   ,---.   \n"+
                               " '   .-'|  .'  /|  |  |  |  |  '   .-'  \n"+
                               " `.  `-.|  .  ' |  |  |  |  |  `.  `-.  \n"+
                               "  .-'   |  |\\  \\|  |  '--|  '--.-'    ) \n"+
                               " `-----'`--' '--`--`-----`-----`-----'  ]");
        this.echo()
        this.echo(highlight("Languages:"));
        this.echo('|\t\tPython, Java, C, SQL, Javascript');
        this.echo(highlight('Frameworks & Tools: '));
        this.echo('|\t\tDjango, Hadoop, Git, Bash, Linux');


        this.echo();
        this.echo();

        this.echo(highlight('--------------------------------------------------------------------------'));
        this.echo("[[g;#EEEEEE;] ,--.  ,------. ,---. ,------. ,------,------. ,---. ,--.  ,--,--,------.       \n"+
                               " |  |  |  .---'/  O  \\|  .-.  \\|  .---|  .--. '   .-'|  '--'  |  |  .--. '    \n"+
                               " |  |  |  `--,|  .-.  |  |  \\  |  `--,|  '--'.`.  `-.|  .--.  |  |  '--' |      \n"+
                               " |  '--|  `---|  | |  |  '--'  |  `---|  |\\  \\.-'    |  |  |  |  |  | --'     \n"+
                               " `-----`------`--' `--`-------'`------`--' '--`-----'`--'  `--`--`--'           ]");
        this.echo();
        this.echo(highlight('President - Rutgers Cognitive Science Club'));
        this.echo('|\t\t-Increased club attendance by over 300% through outreach and club initiatives');
        this.echo('|\t\t-Responsible for managing executive board to plan and execute events on a weekly basis');

        this.echo(highlight('Director of Finance - HackRU'));
        this.echo("|\t\t-Leading a team of 8 to recruit sponsors and manage $100,000 budget required to finance Rutgers' bi-annual hackathon - HackRU");
        this.echo(highlight('=============================================================================='));
        this.echo();
        this.echo();

     }

}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

jQuery(document).ready(function($) {
    
           $('html').terminal(App, {
         greetings: greeting,
                prompt: function(p){
            var path = '~'
            p(user + ":" + path + "# ");
        },
        scrollOnEcho: true,

        onBlur: function() {
            // prevent losing focus
            return false;
        },
        tabcompletion: true,

        });
 
});


function showHelp(consoleObj)
{
        consoleObj.echo();
        consoleObj.echo("[[g;#44D544;]Available commands:]");
        consoleObj.echo("|\t[[g;#44D544;]help]    \t\t- [[b;#44D544;]lists the available commands");
        consoleObj.echo("|\t[[g;#44D544;]whoami]  \t\t- [[b;#44D544;]a bit about me!]");
        consoleObj.echo("|\t[[g;#44D544;]resume] \t\t-  [[b;#44D544;]my credentials]");     
        consoleObj.echo("|\t[[g;#44D544;]contact] \t\t- [[b;#44D544;]contact information]");    
        consoleObj.echo("|\t[[g;#44D544;]normal]  \t\t- [[b;#44D544;]a non-command line version of my website]");
        consoleObj.echo("|\t[[g;#44D544;]credits] \t\t- [[b;#44D544;]credits for this website]");     
        consoleObj.echo("|\t[[g;#44D544;]welcome] \t\t-  [[b;#44D544;]the welcome banner]");     
        consoleObj.echo("|\t[[g;#44D544;]clear]   \t\t- [[b;#44D544;]clears the screen (or CONTROL + L)]");        
        consoleObj.echo();
}

