let radioBtns = document.querySelectorAll('input[type="radio"]');
let radioMap = new Map();
for (let btn of radioBtns) {
    btn.addEventListener("change", function (e) {
        radioMap.set(e.target.name, e.target.value)
        updateScore()
    })
}


function updateScore() {
    if (radioMap.get("AV") && radioMap.get("AC") && radioMap.get("PR")
        && radioMap.get("UI") && radioMap.get("scope") && radioMap.get("conf")
        && radioMap.get("integ") && radioMap.get("avail") && radioMap.get("health")
        && radioMap.get("sens")) {
        document.getElementById("warning").style.display = "none"
        let avScore;
        let acScore;
        let prScore;
        let uiScore;

        if (radioMap.get("AV") == "AV_N") {
            avScore = 0.85;
        } else if (radioMap.get("AV") == "AV_A") {
            avScore = 0.62;
        } else if (radioMap.get("AV") == "AV_L") {
            avScore = 0.55;
        } else if (radioMap.get("AV") == "AV_P") {
            avScore = 0.20;
        }

        if (radioMap.get("AC") == "AC_L") {
            acScore = 0.77;
        } else if (radioMap.get("AC") == "AC_H") {
            acScore = 0.44;
        }

        if (radioMap.get("PR") == "PR_N") {
            prScore = 0.85;
        } else if (radioMap.get("PR") == "PR_L") {
            prScore = 0.62;
        } else if (radioMap.get("PR") == "PR_H") {
            prScore = 0.27;
        }

        if (radioMap.get("UI") == "UI_N") {
            uiScore = 0.85;
        } else if (radioMap.get("UI") == "UI_R") {
            uiScore = 0.62;
        }

        const exploitability = avScore * acScore * prScore * uiScore;
        let healthScore;
        let availScore;

        if (radioMap.get("health") == "health_N") {
            healthScore = 0
        } else if (radioMap.get("health") == "health_L") {
            healthScore = 1
        } else if (radioMap.get("health") == "health_H") {
            healthScore = 2
        }

        if (radioMap.get("avail") == "avail_N") {
            availScore = 0
        } else if (radioMap.get("avail") == "avail_L") {
            availScore = 1
        } else if (radioMap.get("avail") == "avail_H") {
            availScore = 2
        }

        const availMatrix = [[0.00, 0.22, 0.56],
        [0.55, 0.60, 0.65],
        [0.85, 0.90, 0.95]]
        const baseAvailability = availMatrix[healthScore][availScore]

        let integScore;

        if (radioMap.get("integ") == "integ_N") {
            integScore = 0
        } else if (radioMap.get("integ") == "integ_L") {
            integScore = 1
        } else if (radioMap.get("integ") == "integ_H") {
            integScore = 2
        }

        const integMatrix = [[0.00, 0.22, 0.56],
        [0.55, 0.60, 0.75],
        [0.85, 0.90, 0.95]]
        const baseIntegrity = integMatrix[healthScore][integScore]

        let sensScore;
        let confScore;

        if (radioMap.get("conf") == "conf_N") {
            confScore = 0
        } else if (radioMap.get("conf") == "conf_L") {
            confScore = 1
        } else if (radioMap.get("conf") == "conf_H") {
            confScore = 2
        }

        if (radioMap.get("sens") == "sens_N") {
            sensScore = 0
        } else if (radioMap.get("sens") == "sens_L") {
            sensScore = 1
        } else if (radioMap.get("sens") == "sens_H") {
            sensScore = 2
        }

        const confMatrix = [[0.00, 0.22, 0.56],
        [0.00, 0.65, 0.75],
        [0.00, 0.85, 0.95]]

        const baseConfidentiality = confMatrix[sensScore][confScore]

        const scoreBase = baseConfidentiality + baseIntegrity + baseAvailability

        let scopeStatus;

        if (radioMap.get("scope") == "scope_U") {
            scopeStatus = 1.0
        } else if (radioMap.get("scope") == "scope_C") {
            scopeStatus = 1.08
        }

        let scoreFinal;
        if (scoreBase == 0) {
            scoreFinal = 0
        } else {
            scoreFinal = scopeStatus * ((3.326258289 * scoreBase) + (1.1 * exploitability))
        }

        document.getElementById("score").textContent = Math.round(scoreFinal * 10) / 10
    }

}

