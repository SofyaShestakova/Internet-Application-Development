<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <title>Lab2</title>
    <link rel="stylesheet" type="text/css" href="index_styles.css"/>

    <script type="text/javascript" src="//code.jquery.com/jquery-2.1.0.js"></script>
    <script type="text/javascript" src="myscript.js"></script>

    <meta charset="UTF-8">
</head>

<body>
<header>
    <table width=100%>
        <tr>
            <td class="variant">Вариант: 20293</td>
            <td class="group">Группа: P3202</td>
        </tr>
        <tr>
            <td class="autor">Зайцев Артем Алексеевич</td>
            <td class="autor">Шестакова Софья Александровна</td>
        </tr>
    </table>
</header>

<table width="100%">
    <tr>
        <td width="30%">
            <div class="flex-container">
                <form action="controller" method="post">

                    <div>
                        <fieldset>
                            <legend>Координата Х</legend>
                            <input id="X" name="X" type="text" value="0" style="display: none;">
                            <input type="button" value="-2" onclick="val(this)">
                            <input type="button" value="-1.5" onclick="val(this)">
                            <input type="button" value="-1" onclick="val(this)">
                            <input type="button" value="-0.5" onclick="val(this)">
                            <input type="button" value="0" onclick="val(this)">
                            <input type="button" value="0.5" onclick="val(this)">
                            <input type="button" value="1" onclick="val(this)">
                            <input type="button" value="1.5" onclick="val(this)">
                            <input type="button" value="2" onclick="val(this)">

                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Координата Y</legend>
                            <label>
                                <p align="center">Диапазон: (-5..3)</p>
                                <input id="Y" class="parameter" type="text" name="Y"
                                       autocomplete="off" placeholder="Цифирки"
                                       oninput="return input_Y(this.value)"
                                       onchange="return change_Y(this)"/>
                            </label>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Параметр R</legend>
                            <input id="radius" name="R" type="text" value="" style="display: none;">
                            <p><input type="radio" name="R" value="1" onclick="valR(this)">1</p>
                            <p><input type="radio" name="R" value="1.5" onclick="valR(this)">1.5</p>
                            <p><input type="radio" name="R" value="2" onclick="valR(this)">2</p>
                            <p><input type="radio" name="R" value="2.5" onclick="valR(this)">2.5</p>
                            <p><input type="radio" name="R" value="3" onclick="valR(this)">3</p>
                        </fieldset>
                    </div>

                    <div>
                        <input id="magic_button" class="parameter"
                               style="padding: 3%; margin-right: 2%; margin-top: 3%"
                               type="submit" value="Отправить"
                               disabled="disabled">
                </div>
                </form>
            </div>

        </td>

        <td width="70%">
            <canvas id="myCanvas" height="500%" width="1000%">
            </canvas>
            <script>
                draw_function()
            </script>
        </td>
    </tr>
</table>

</body>
</html>

