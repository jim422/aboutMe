<th>
    <span data-bind="text: friendly_name"></span>:
</th>
<td>
    <div class="uk-margin">
        <div class="uk-inline">
            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: pencil"></a>
            <input class="uk-input" type="number"
                   data-bind="value: value, attr: { max: max, min: min }, event: { blur: validate }">
        </div>
    </div>
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
</td>
<td></td>